import { Composition } from "remotion";
import { FadeIn } from "./FadeIn";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="FadeIn"
        component={FadeIn}
        durationInFrames={60}
        fps={30}
        width={1280}
        height={720}
      />
    </>
  );
};
