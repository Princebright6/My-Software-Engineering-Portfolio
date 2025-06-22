'use client';

import type { TechDetails as TechDetailsType } from '@/lib/types';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import ImageWrapper from '@/components/data-display/image-wrapper';

const TechDetails = ({ url, logo, darkModeLogo, label }: TechDetailsType) => {
  return (
    <div className="flex flex-col items-center gap-2 group">
      <Link noCustomization href={url} externalLink>
        <div className="transform transition-transform duration-300 group-hover:scale-110">
          <ImageWrapper
            src={logo}
            srcForDarkMode={darkModeLogo}
            alt={label}
            width={48}
            height={48}
          />
        </div>
      </Link>
      <Typography variant="body1" className="text-center min-h-[24px]">{label}</Typography>
    </div>
  );
};

export default TechDetails;
