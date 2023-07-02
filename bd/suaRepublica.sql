SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema suaRepublica
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `suaRepublica` DEFAULT CHARACTER SET utf8;
USE `suaRepublica`;

-- -----------------------------------------------------
-- Table `suaRepublica`.`Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `suaRepublica`.`Usuario` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `usuario` VARCHAR(50) NOT NULL,
  `data_nascimento` DATE NULL,
  `sexo` ENUM('FEMININO', 'MASCULINO', 'OUTRO') NULL,
  `email` VARCHAR(100) NOT NULL,
  `senha` VARCHAR(200) NOT NULL,
  `republicas_favoritas` JSON NULL,
  `createdAt` DATETIME NOT NULL DEFAULT now(),
  `updatedAt` DATETIME NOT NULL DEFAULT now(),
  `deletedAt` DATETIME NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE INDEX `idusuario_UNIQUE` (`id_usuario` ASC) VISIBLE,
  UNIQUE INDEX `usuario_UNIQUE` (`usuario` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `suaRepublica`.`Republica`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `suaRepublica`.`Republica` (
  `id_republica` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `imagem` VARCHAR(500) NULL,
  `descricao` VARCHAR(1000) NOT NULL,
  `qtd_vagas` INT NOT NULL,
  `qtd_quartos` INT NOT NULL,
  `qtd_banheiros` INT NOT NULL,
  `lotacao_maxima` INT NOT NULL,
  `permite_animais` TINYINT NOT NULL DEFAULT 0,
  `permite_fumantes` TINYINT NOT NULL DEFAULT 0,
  `reputacao` FLOAT NOT NULL DEFAULT 0,
  `genero` ENUM('FEMININO', 'MASCULINO', 'MISTO', 'OUTRO') NOT NULL,
  `createdAt` DATETIME NOT NULL DEFAULT now(),
  `updatedAt` DATETIME NOT NULL DEFAULT now(),
  `deletedAt` DATETIME NULL,
  `Usuario_id_usuario` INT NOT NULL,
  PRIMARY KEY (`id_republica`),
  UNIQUE INDEX `idrepublica_UNIQUE` (`id_republica` ASC) VISIBLE,
  INDEX `fk_Republica_Usuario1_idx` (`Usuario_id_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_Republica_Usuario1`
    FOREIGN KEY (`Usuario_id_usuario`)
    REFERENCES `suaRepublica`.`Usuario` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `suaRepublica`.`Vaga`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `suaRepublica`.`Vaga` (
  `id_vaga` INT NOT NULL AUTO_INCREMENT,
  `descricao` VARCHAR(1000) NOT NULL,
  `suite` TINYINT NOT NULL DEFAULT 0,
  `valor_despesas` FLOAT NULL,
  `qtd_vagas_garagem` INT NULL DEFAULT 0,
  `tipo_divisao` ENUM('INDIVIDUAL', 'DUPLA', 'TRIO', 'QUARTETO', 'QUINTETO') NULL,
  `status` ENUM('RESERVADA', 'DISPONIVEL', 'ALUGADA') NULL,
  `createdAt` DATETIME NOT NULL DEFAULT now(),
  `updatedAt` DATETIME NOT NULL DEFAULT now(),
  `deletedAt` DATETIME NULL,
  `Republica_id_republica` INT NOT NULL,
  PRIMARY KEY (`id_vaga`),
  UNIQUE INDEX `idvaga_UNIQUE` (`id_vaga` ASC) INVISIBLE,
  INDEX `fk_Vaga_Republica1_idx` (`Republica_id_republica` ASC) VISIBLE,
  CONSTRAINT `fk_Vaga_Republica1`
    FOREIGN KEY (`Republica_id_republica`)
    REFERENCES `suaRepublica`.`Republica` (`id_republica`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `suaRepublica`.`Reserva`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `suaRepublica`.`Reserva` (
  `id_reserva` INT NOT NULL AUTO_INCREMENT,
  `data_entrada` DATETIME NOT NULL,
  `data_saida` DATETIME NULL,
  `createdAt` DATETIME NOT NULL DEFAULT now(),
  `updateAt` DATETIME NOT NULL DEFAULT now(),
  `deletedAt` DATETIME NULL,
  `Usuario_id_usuario` INT NOT NULL,
  `Vaga_id_vaga` INT NOT NULL,
  PRIMARY KEY (`id_reserva`),
  UNIQUE INDEX `idreserva_UNIQUE` (`id_reserva` ASC) VISIBLE,
  INDEX `fk_Reserva_Usuario1_idx` (`Usuario_id_usuario` ASC) VISIBLE,
  INDEX `fk_Reserva_Vaga1_idx` (`Vaga_id_vaga` ASC) VISIBLE,
  CONSTRAINT `fk_Reserva_Usuario1`
    FOREIGN KEY (`Usuario_id_usuario`)
    REFERENCES `suaRepublica`.`Usuario` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Reserva_Vaga1`
    FOREIGN KEY (`Vaga_id_vaga`)
    REFERENCES `suaRepublica`.`Vaga` (`id_vaga`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `suaRepublica`.`Chat`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `suaRepublica`.`Chat` (
  `id_chat` INT NOT NULL AUTO_INCREMENT,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NULL,
  PRIMARY KEY (`id_chat`),
  UNIQUE INDEX `idchat_UNIQUE` (`id_chat` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `suaRepublica`.`Mensagem`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `suaRepublica`.`Mensagem` (
  `id_mensagem` INT NOT NULL AUTO_INCREMENT,
  `id_emissor` INT NOT NULL,
  `texto` VARCHAR(1000) NOT NULL,
  `horaEnvio` DATETIME NOT NULL,
  `Chat_id_chat` INT NOT NULL,
  PRIMARY KEY (`id_mensagem`),
  UNIQUE INDEX `idmensagem_UNIQUE` (`id_mensagem` ASC) VISIBLE,
  INDEX `fk_Mensagem_Chat1_idx` (`Chat_id_chat` ASC) VISIBLE,
  INDEX `fk_Mensagem_Usuario1_idx` (`id_emissor` ASC) VISIBLE,
  CONSTRAINT `fk_Mensagem_Chat1`
    FOREIGN KEY (`Chat_id_chat`)
    REFERENCES `suaRepublica`.`Chat` (`id_chat`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Mensagem_Usuario1`
    FOREIGN KEY (`id_emissor`)
    REFERENCES `suaRepublica`.`Usuario` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `suaRepublica`.`AvaliacaoRepublica`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `suaRepublica`.`AvaliacaoRepublica` (
  `id_avaliacao_republica` INT NOT NULL AUTO_INCREMENT,
  `data` DATETIME NOT NULL DEFAULT now(),
  `comentario` VARCHAR(500) NULL,
  `classificacao` INT NOT NULL,
  `Usuario_id_usuario` INT NOT NULL,
  `Republica_id_republica` INT NOT NULL,
  PRIMARY KEY (`id_avaliacao_republica`),
  UNIQUE INDEX `idavaliacaoRepublica_UNIQUE` (`id_avaliacao_republica` ASC) VISIBLE,
  INDEX `fk_AvaliacaoRepublica_Usuario1_idx` (`Usuario_id_usuario` ASC) VISIBLE,
  INDEX `fk_AvaliacaoRepublica_Republica1_idx` (`Republica_id_republica` ASC) VISIBLE,
  CONSTRAINT `fk_AvaliacaoRepublica_Usuario1`
    FOREIGN KEY (`Usuario_id_usuario`)
    REFERENCES `suaRepublica`.`Usuario` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_AvaliacaoRepublica_Republica1`
    FOREIGN KEY (`Republica_id_republica`)
    REFERENCES `suaRepublica`.`Republica` (`id_republica`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `suaRepublica`.`Endereco`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `suaRepublica`.`Endereco` (
  `logradouro` VARCHAR(70) NOT NULL,
  `numero` INT NOT NULL,
  `bairro` VARCHAR(50) NOT NULL,
  `municipio` VARCHAR(30) NOT NULL,
  `estado` VARCHAR(20) NOT NULL,
  `complemento` VARCHAR(20) NULL,
  `cep` VARCHAR(10),
  `Republica_id_republica` INT NOT NULL,
  PRIMARY KEY (`Republica_id_republica`),
  INDEX `fk_Endereco_Republica1` (`Republica_id_republica` ASC) VISIBLE,
  CONSTRAINT `fk_Endereco_Republica1`
    FOREIGN KEY (`Republica_id_republica`)
    REFERENCES `suaRepublica`.`Republica` (`id_republica`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `suaRepublica`.`Telefone`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `suaRepublica`.`Telefone` (
  `telefone` VARCHAR(14) NOT NULL,
  `telefone_alternativo` VARCHAR(14) NULL,
  `telefone_whatsapp` VARCHAR(14) NULL,
  `Republica_id_republica` INT NOT NULL,
  PRIMARY KEY (`Republica_id_republica`),
  CONSTRAINT `fk_Telefone_Republica1`
    FOREIGN KEY (`Republica_id_republica`)
    REFERENCES `suaRepublica`.`Republica` (`id_republica`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `suaRepublica`.`Usuario_has_Chat`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `suaRepublica`.`Usuario_has_Chat` (
  `Usuario_id_usuario` INT NOT NULL,
  `Chat_id_chat` INT NOT NULL,
  PRIMARY KEY (`Usuario_id_usuario`, `Chat_id_chat`),
  INDEX `fk_Usuario_has_Chat_Chat1_idx` (`Chat_id_chat` ASC) VISIBLE,
  INDEX `fk_Usuario_has_Chat_Usuario1_idx` (`Usuario_id_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_Usuario_has_Chat_Usuario1`
    FOREIGN KEY (`Usuario_id_usuario`)
    REFERENCES `suaRepublica`.`Usuario` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuario_has_Chat_Chat1`
    FOREIGN KEY (`Chat_id_chat`)
    REFERENCES `suaRepublica`.`Chat` (`id_chat`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;