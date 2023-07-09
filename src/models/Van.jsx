import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function Van(props) {
    const { nodes, materials } = useGLTF("./models/van.gltf");
    const realObjectColors = new Map();

    const getRealColor = (object) => {
        if (realObjectColors.has(object.material)) {
            return realObjectColors.get(object.material);
        }

        const color = object.material.color;
        realObjectColors.set(object.material, color.clone());

        return realObjectColors.get(object.material);
    };

    const onVanClick = (e) => {
        e.stopPropagation();

        const clickedObject = e.object;
        const realColor = getRealColor(clickedObject);

        // Open a menu with the color picker
        const colorPicker = document.createElement("input");
        colorPicker.type = "color";
        colorPicker.value = `#${realColor.getHexString()}`;

        colorPicker.addEventListener("input", (e) => {
            const hexColor = e.target.value;
            const newColor = new THREE.Color(hexColor);

            realObjectColors.set(clickedObject.material, newColor);

            clickedObject.material.color.r = newColor.r;
            clickedObject.material.color.g = newColor.g;
            clickedObject.material.color.b = newColor.b;
        });

        colorPicker.click();
    };

    const onVanOver = (e) => {
        e.stopPropagation();
        const realColor = getRealColor(e.object);

        e.object.material.color.r = realColor.r + 0.05;
        e.object.material.color.g = realColor.g + 0.05;
        e.object.material.color.b = realColor.b + 0.05;

        window.document.body.style.cursor = "pointer";
    };

    const onVanLeave = (e) => {
        e.stopPropagation();
        const realColor = getRealColor(e.object);

        e.object.material.color.r = realColor.r;
        e.object.material.color.g = realColor.g;
        e.object.material.color.b = realColor.b;

        window.document.body.style.cursor = "auto";
    };

    return (
        <group
            {...props}
            dispose={null}
            onClick={onVanClick}
            onPointerOver={onVanOver}
            onPointerLeave={onVanLeave}
        >
            <group rotation={[Math.PI, 0, Math.PI]} scale={1.2}>
                <group position={[0, 0.2, -0.1]}>
                    <mesh
                        geometry={nodes.Mesh_body.geometry}
                        material={materials.plastic}
                    />
                    <mesh
                        geometry={nodes.Mesh_body_1.geometry}
                        material={materials.paintBlue}
                    />
                    <mesh
                        geometry={nodes.Mesh_body_2.geometry}
                        material={materials.lightFront}
                    />
                    <mesh
                        geometry={nodes.Mesh_body_3.geometry}
                        material={materials._defaultMat}
                    />
                    <mesh
                        geometry={nodes.Mesh_body_4.geometry}
                        material={materials.lightBack}
                    />
                    <mesh
                        geometry={nodes.Mesh_body_5.geometry}
                        material={materials.window}
                    />
                </group>
                <group position={[-0.35, 0.3, 0.76]} scale={[-1, 1, 1]}>
                    <mesh
                        geometry={nodes.Mesh_wheel_frontLeft.geometry}
                        material={materials.carTire}
                    />
                    <mesh
                        geometry={nodes.Mesh_wheel_frontLeft_1.geometry}
                        material={materials._defaultMat}
                    />
                </group>
                <group position={[0.35, 0.3, 0.76]}>
                    <mesh
                        geometry={nodes.Mesh_wheel_frontLeft.geometry}
                        material={materials.carTire}
                    />
                    <mesh
                        geometry={nodes.Mesh_wheel_frontLeft_1.geometry}
                        material={materials._defaultMat}
                    />
                </group>
                <group position={[-0.35, 0.3, -0.76]} scale={[-1, 1, 1]}>
                    <mesh
                        geometry={nodes.Mesh_wheel_frontLeft.geometry}
                        material={materials.carTire}
                    />
                    <mesh
                        geometry={nodes.Mesh_wheel_frontLeft_1.geometry}
                        material={materials._defaultMat}
                    />
                </group>
                <group position={[0.35, 0.3, -0.76]}>
                    <mesh
                        geometry={nodes.Mesh_wheel_frontLeft.geometry}
                        material={materials.carTire}
                    />
                    <mesh
                        geometry={nodes.Mesh_wheel_frontLeft_1.geometry}
                        material={materials._defaultMat}
                    />
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("./models/van.gltf");
