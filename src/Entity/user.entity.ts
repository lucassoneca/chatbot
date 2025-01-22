import { Entity, PrimaryGeneratedColumn, Column, Timestamp } from "typeorm";

@Entity('tab_wpp') //define q esta classe é uma tabela no bando
export class tab_wpp {
    @PrimaryGeneratedColumn()
    cod_cpf: number;
    
    @PrimaryGeneratedColumn()
    num_lote: String;

    @Column('date')
    dta_inicio_vigencia: Date;

    @Column('date')
    dta_fim_vigencia: Date;

    @Column('date')
    dta_pagamento: Date;

    @Column('double precision')
    num_valor_pago: number;

    @Column('char', { length: 1 })
    bln_pagamento_pendencia: string;

    @Column('date')
    dta_vencimento_pagamento: Date;

    @Column('char')
    nom_solicitante: String;

    @Column('timestamp')
    dta_cadastro: Timestamp;

    @Column('timestamp')
    dta_atualizacao: Timestamp;

    @Column('int')
    num_caa: number;
}