import { Image } from '@/components/common/Image';
import { Link } from '@/components/common/Link';
import { sns } from '@/config/sns';

export const Profile = () => (
  <div className="select-none vstack items-center gap-5 p-6 bg-primary-1">
    <div className="vstack items-center gap-2">
      <Image
        className="object-cover w-28 h-28 rounded-full"
        alt="avatar"
        src="/assets/author.png"
      />
      <h1 className="text-2xl font-semibold text-primary-1">syquray</h1>
    </div>

    <p className="text-primary-1">
      Python とか C# とか TypeScript とか。Next.js を勉強していきたい。
      一番好きな曲は wowaka さんの アンノウン・マザーグース かな。
      でもあれですね、( クラロワ | T3 Arena ) は神ゲーです。
    </p>

    <div className="flex gap-4">
      {sns.map(({ href, icon, label }) => (
        <Link key={href} href={href} passHref>
          <a className="text-primary-1" aria-label={label}>
            {icon}
          </a>
        </Link>
      ))}
    </div>
  </div>
);
