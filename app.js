let scene;
let camera;
let renderer;


function main()
{
    const canvas = document.querySelector('#c');


    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 2;
    scene.add(camera);

    renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true,});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    renderer.autoClear = false;
    renderer.setClearColor(0x00000, 0.0);


    // create moongeometry

    const moongeometry = new THREE.SphereGeometry(0.5,64,64);

    const moonmaterial = new THREE.MeshPhongMaterial({
        roughness : 2,
        metalness: 0,
        map: THREE.ImageUtils.loadTexture('texture/moon.jpg'),
        bumpMap: THREE.ImageUtils.loadTexture('texture/moon.jpg'),
        bumpScale: 0.01,
    });

    const moonmesh = new THREE.Mesh(moongeometry,moonmaterial);

    scene.add(moonmesh);

    // set ambientlight

    const ambientlight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientlight);

    // set point light

    const pointerlight =  new THREE.PointLight(0xffffff, 0.9);

    // set light position

    pointerlight.position.set(2,4,5);
    scene.add(pointerlight);


    // set stars

    const stargeometry =  new THREE.SphereGeometry(80,64,64);

    const starmaterial = new THREE.MeshBasicMaterial({

        map: THREE.ImageUtils.loadTexture('texture/galaxy.png'),
        side: THREE.BackSide
    });

    const starmesh = new THREE.Mesh(stargeometry,starmaterial);

    scene.add(starmesh);

    
    const animate = () =>{
        requestAnimationFrame(animate);
        moonmesh.rotation.y -= 0.006;
        moonmesh.rotation.x -= 0.006;
        starmesh.rotation.y += 0.0005;
        render();
    }

    const render = () => {
        renderer.render(scene,camera);
    }

    animate();
}

window.onload = main;