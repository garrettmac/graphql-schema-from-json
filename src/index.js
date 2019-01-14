export * from './nameConverter';
import isRelationshipFieldImport from './isRelationshipField';

export const isRelationshipField = isRelationshipFieldImport;
import getSchemaFromData from './getSchemaFromData';
import { printSchema } from 'graphql/utilities';

export default { printSchema, getSchemaFromData };
