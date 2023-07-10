import { OrbitControls, Stage, Text } from "@react-three/drei";
import Van from "./models/Van";
import { useThree } from "@react-three/fiber";
import { Suspense } from "react";

export default function Experience() {
    const { camera } = useThree();
    camera.position.y = 3;

    return (
        <>
            <OrbitControls makeDefault />
            <Suspense fallback={<Text>Please wait...</Text>}>
                <Stage environment="sunset" adjustCamera={true}>
                    <Van rotation-y={Math.PI * 0.25} />
                </Stage>
            </Suspense>
        </>
    );
}
