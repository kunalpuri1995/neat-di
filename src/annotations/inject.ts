import "reflect-metadata";
import { DefaultObjectFactory } from "../impl/default-object-factory";
import { ObjectFactory } from "src/core/object-factory";

const injectMetadataKey = Symbol("Inject");

export function Inject(name: string, scopeId?: string, constructorArgs?: Array<any>): any {
    return (target: Object, key: string) => {
        let of: ObjectFactory = DefaultObjectFactory.getInstance();

        of.addToTargetMap({
            name: name,
            scopeId: scopeId,
            constructorArgs: constructorArgs,
            target: target,
            key: key
        });
    }
}