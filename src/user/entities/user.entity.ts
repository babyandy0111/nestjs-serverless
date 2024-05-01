import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user", { schema: "test" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 100 })
  name: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 100 })
  email: string | null;

  @Column("datetime", { name: "create", nullable: true })
  create: Date | null;

  @Column("timestamp", { name: "update", nullable: true })
  update: Date | null;
}
