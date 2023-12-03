import {
  AbsoluteFill,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const ScaleText = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({ fps, frame });
  return (
    <AbsoluteFill
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "7em",
      }}
    >
      <div style={{ transform: `scale(${scale})` }}>Hello, World</div>
    </AbsoluteFill>
  );
};
