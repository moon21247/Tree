export class Configuration {
    growth = 1;
    layerWireframe = false;
    layerBranches = true;
    layerSpheres = false;

    seed = Math.floor(Math.random() * 0x100000000);

    radiusInitial = .1;
    radiusDecay = .89;
    radiusThreshold = .015;

    extendTries = 5;
    extendAngle = .72;
}