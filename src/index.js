export * from './nameConverter';

import isRelationshipFieldImport from './isRelationshipField';
export const isRelationshipField = isRelationshipFieldImport;

import getSchemaFromDataImport from './getSchemaFromData';
export default getSchemaFromDataImport;
export const getSchemaFromData = getSchemaFromDataImport;

import * as graphql from 'graphql/utilities';
export const printSchema = graphql.printSchema;
