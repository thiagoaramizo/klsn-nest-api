import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  documento: string;

  @Column()
  tipo: string;

  @Column({
    type: 'boolean',
    default: true,
  })
  situacao: boolean;
}
