class DeleteJwtDenyLists < ActiveRecord::Migration[6.0]
  def change
    drop_table :jwt_deny_lists
  end
end
