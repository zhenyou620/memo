import { FC } from 'react';
import './button.css';

interface ButtonProps {
  /**
   * ページ上で主要な役割をするボタンかどうか
   */
  primary?: boolean;
  /**
   * ボタンの背景色。
   */
  backgroundColor?: string;
  /**
   * ボタンの大きさ。
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * ボタンの内容
   */
  label: string;
  /**
   * 任意のクリックイベント
   */
  onClick?: () => void;
}

/**
 * ユーザにアクションを実行してもらうためのコンポーネント
 */
export const Button: FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';

  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(
        ' ',
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
