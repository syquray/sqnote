import { RiChatNewLine } from 'react-icons/ri';
import { Link } from '@/components/common/Link';
import { MainLayout } from '@/components/features/app/Layout';
import { Profile } from '@/components/features/app/Profile';
import { Stories } from '@/components/features/story/Stories';
import { PostType } from '@/types/post';

type Props = {
  posts: PostType[];
};

export const Home: React.VFC<Props> = ({ posts }) => {
  return (
    <MainLayout
      main={
        <div className="vstack gap-12 p-8 bg-primary-1">
          <Stories posts={posts} title="latest note" icon={<RiChatNewLine />} />
          <Link href="/posts/page/1" passHref>
            <a className="button">
              View all notes
            </a>
          </Link>
        </div>
      }
      aside={<Profile />}
    />
  );
};
