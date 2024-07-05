import { FC } from 'react';
import { StarIcon as OutlineStar } from '@heroicons/react/24/outline';
import { StarIcon as SolidStar } from '@heroicons/react/24/solid';
import { Task as TaskType } from '../types/Task';
import { Checkbox } from '@/components/ui/checkbox';

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
      <Checkbox
        name="task-text"
        className="mr-4"
        checked={archived === true}
        aria-label={`archiveTask-${id}`}
        onClick={() => handleArchived(id)}
      ></Checkbox>
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
          <SolidStar className={`size-6 text-sky-300`}></SolidStar>
        ) : (
          <OutlineStar className={`size-6 text-slate-300`}></OutlineStar>
        )}
      </button>
    </div>
  );
};
