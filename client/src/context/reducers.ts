type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
      ? {
          type: Key;
        }
      : {
          type: Key;
          payload: M[Key];
        }
  };
  
  export enum Types {
    connectWalletModalClose = "LIGHTBOX_CLOSE",
    connectWalletModalOpen = "LIGHTBOX_OPEN"
  }
  
  type statePayload = {
    [Types.connectWalletModalClose]: undefined;
    [Types.connectWalletModalOpen]: undefined;
  };
  
  export type stateActions = ActionMap<
    statePayload
  >[keyof ActionMap<statePayload>];
  
  export const stateReducer = (
    state: any,
    action: any
  ) => {
    switch (action.type) {
      case Types.connectWalletModalClose:
        return {
            ...state,
            connectWalletModal: false,
        };
      case Types.connectWalletModalOpen:
        return {
            ...state,
            connectWalletModal: true,
        };
      default:
        return state;
    }
  };
  