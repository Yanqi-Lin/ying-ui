import { FC, InputHTMLAttributes, ReactElement, ChangeEvent } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
type InputSize = "lg" | "sm";
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
    /**是否禁用Input */
    disabled?: boolean;
    /**设置input的大小，支持lg或sm*/
    size?: InputSize;
    /**添加图标，在右侧悬浮添加一个图标，用于提示 */
    icon?: IconProp;
    /**添加前缀 用于配置一些固定组合 */
    prepend?: string | ReactElement;
    /**添加后缀 用于配置一些固定组合 */
    append?: string | ReactElement;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
/**
 * Input 输入框 通过鼠标或键盘输入内容，是最基础的表单域的包装。
 *
 * ### 引用方法
 * ~~~js
 * import { Input } from 'yinyin-ui-ts'
 * ~~~
 * 支持 HTMLInput 的所有基本属性
 */
export declare const Input: FC<InputProps>;
export default Input;
