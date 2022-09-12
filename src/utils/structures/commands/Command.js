export class Command {
  constructor(data) {
    this.name = data.name
    this.description = data.description
    this.options = data.options || []
    this.defaultMembersPermissions = data.permissions || []
  }
}