export * from './nameConverter';
import isRelationshipFieldImport from './isRelationshipField';

export const isRelationshipField = isRelationshipFieldImport;
import getSchemaFromDataImport from './getSchemaFromData';
import * as graphql from 'graphql/utilities';

export const getSchemaFromData = getSchemaFromDataImport;
export const printSchema = graphql.printSchema;
