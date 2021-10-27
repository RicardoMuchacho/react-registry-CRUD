CREATE DATABASE persona_db

CREATE TABLE public.persona (
    id_persona serial PRIMARY KEY,
    no_persona character varying(20) NOT NULL,
    ap_persona character varying(20),
    ci_persona integer NOT NULL,
    sx_persona character varying(20)
);