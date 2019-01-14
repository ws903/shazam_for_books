class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :title
      t.string :img
      t.string :author
      t.decimal :rating, precision: 10, scale: 2
      t.integer :year
      t.integer :pages
      t.integer :isbn, limit: 8

      t.timestamps
    end
  end
end
