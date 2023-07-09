import { OrbitControls, PresentationControls, Stage } from "@react-three/drei";
import Van from "./models/Van";
import { useThree } from "@react-three/fiber";

export default function Experience() {
    const { camera } = useThree();
    camera.position.y = 3;

    return (
        <>
            <OrbitControls makeDefault />
            <Stage environment="sunset" adjustCamera={true}>
                <Van rotation-y={Math.PI * 0.25} />
            </Stage>
        </>
    );
}
