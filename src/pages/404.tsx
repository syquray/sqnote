import { Link } from '@/components/common/Link';

const View = () => (
  <div className="vstack items-center p-8 bg-primary-1">
    <p className="mb-4 text-sm md:text-base font-bold uppercase text-accent-1">
      HTTP 404
    </p>
    <h1 className="mb-2 text-2xl md:text-3xl font-bold text-primary-1">
      ページが見つかりません
    </h1>

    <p className="mb-12 text-gray-500 dark:text-gray-300 md:text-lg">
      お探しのページは存在しません
    </p>

    <Link href="/" passHref>
      <a className="px-10 button">トップページに戻る</a>
    </Link>
  </div>
);

export default View;
