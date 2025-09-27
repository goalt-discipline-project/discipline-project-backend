import type { MiddlewareHandler } from 'hono';
import { z } from 'zod';
import { HttpError } from '../common/errors/app.errors.ts';
import { InvalidRequestParameterError } from '../common/errors/request.errors.ts';

export const createDatabaseSchema = z.object({
  create_db: z.preprocess((val) => {
    if (val === 'true') return true;
    if (val === 'false') return false;
    return val;
  }, z.boolean()),
});

interface dbParamVariable {
  validatedParams: z.infer<typeof createDatabaseSchema>;
}

export const validateCreateDBParam: MiddlewareHandler<{
  Variables: dbParamVariable;
}> = async (c, next) => {
  try {
    const params = { create_db: c.req.query('create_db') };
    const parsed = createDatabaseSchema.safeParse(params);

    if (!parsed.success) {
      console.error('Validation failed:', z.flattenError(parsed.error));
      throw new InvalidRequestParameterError<
        z.infer<typeof createDatabaseSchema>
      >(undefined, z.flattenError(parsed.error));
    }

    c.set('validatedParams', parsed.data);

    await next();
  } catch (error) {
    console.error('Error validating or parsing request', error);
    if (error instanceof HttpError) {
      throw error;
    }

    throw new InvalidRequestParameterError<
      z.infer<typeof createDatabaseSchema>
    >();
  }
};
