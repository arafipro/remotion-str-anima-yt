import { Composition } from "remotion";
import { FadeIn } from "./FadeIn";
import { ScaleText } from "./ScaleText";

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
      <Composition
        id="ScaleText"
        component={ScaleText}
        durationInFrames={60}
        fps={30}
        width={1280}
        height={720}
      />
    </>
  );
};
