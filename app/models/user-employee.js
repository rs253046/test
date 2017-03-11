import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  employee: DS.belongsTo('employee')
});