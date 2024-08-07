// Styles
import * as S from './Cloud.styles';

// i18n
import useTranslations from 'i18n';

// Components
import { Download } from 'components/download';
import { Organizations } from 'components/organizations';
import { Solutions } from 'components/solutions';
import { Trajectory } from 'components/trajectory';

const CloudScreen = () => {
  const t = useTranslations();

  return (
    <S.Container>
      <S.Content>
        <S.Hero>
          <S.Title>CLOUD</S.Title>
        </S.Hero>
        <div id="video_container">
          <div className="bg" />
          <video
            loop
            muted
            autoPlay
            src="https://video.wixstatic.com/video/11062b_cca29298dbe547f4983e127aba1c1966/1080p/mp4/file.mp4"
          />
        </div>
      </S.Content>
      <Solutions />
      <Download />
      <Organizations />
      <Trajectory />
    </S.Container>
  );
};

export default CloudScreen;
