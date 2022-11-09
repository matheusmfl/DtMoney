import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay } from "./styled";
import { X } from "phosphor-react";

export const NewTransactionModal = () => {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <form>
          <input type="text" placeholder="Decrição" required />
          <input type="number" placeholder="Valor" required />
          <input type="text" placeholder="Category" required />

          <button type="submit">Cadastrar</button>
        </form>
        <Dialog.Close />
      </Content>
    </Dialog.Portal>
  );
};
