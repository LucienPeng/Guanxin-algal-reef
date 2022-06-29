export enum InputState {
  Input = '[UseInput] Input',
  Blur = '[UseInput] Blur',
  Reset = '[UseInput] Reset'
};

export interface UseInputState {
  readonly value: string;
  readonly isTouched: boolean;
};

export interface InputAction {
  readonly type: InputState;
  readonly value: string;
}

export interface BlurAction {
  readonly type: InputState;
};

export interface ResetAction {
  readonly type: InputState;
};

export type UseInputAction = InputAction | BlurAction | ResetAction;
