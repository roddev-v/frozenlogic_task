import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class UnitModel extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  relativeValue: string;

  @Column({
    nullable: true
  })
  parentId: number;

  @ManyToOne((type) => UnitModel, (category) => category.child)
  parent: UnitModel;

  @OneToMany((type) => UnitModel, (category) => category.parent)
  child: UnitModel[];
}
