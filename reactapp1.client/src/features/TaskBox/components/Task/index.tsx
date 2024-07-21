import { FC } from 'react';
import { TaskType } from '../../types/TaskType';

type Props = {
  /**
   *タスクオブジェクト
   */
  task: TaskType;

  /**
   * タスク完了処理
   */
  handleArchived: (id: TaskType['id']) => void;

  /**
   * タスクお気に入り処理
   */
  handlePinned: (id: TaskType['id']) => void;
};

/**
 * タスクコンポーネント
 */
export const Task: FC<Props> = ({
  task: { id, text, isArchived: archived = false, isPinned: pinned = false },
  handleArchived,
  handlePinned,
}) => {
  return (
    <div className="flex w-full items-center p-4">
      <input
        type="checkbox"
        name="task-text"
        className="mr-4"
        checked={archived === true}
        aria-label={`archiveTask-${id}`}
        onClick={() => handleArchived(id)}
      />
      <input
        type="text"
        value={text}
        className={`flex-grow outline-none ${archived === true && 'text-slate-500 line-through'}`}
        placeholder="テキストを入力してください..."
      ></input>
      <button
        id={`pinTask-${id}`}
        aria-label={`pinTask-${id}`}
        onClick={() => handlePinned(id)}
      >
        {pinned === true ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 text-sky-300"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-slate-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
        )}
      </button>
    </div>
  );
};
