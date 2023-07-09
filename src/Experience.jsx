import { OrbitControls, PresentationControls, Stage } from "@react-three/drei";
import Van from "./models/Van";
import { useThree } from "@react-three/fiber";

export default function Experience() {
    const { camera } = useThree();
    camera.position.y = 3;

    return (
        <>
            <Stage environment="sunset" adjustCamera={true}>
                <PresentationControls global polar={[-1, 0.2]}>
                    <Van rotation-y={Math.PI * 0.25} />
                </PresentationControls>
            </Stage>
        </>
    );
}
