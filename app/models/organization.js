import DS from 'ember-data';
const { Model } = DS;
import { hasMany } from '@ember-decorators/data';

export default class OrganizationModel extends Model {
  @hasMany('delivery-place') deliveryPlaces;
}
