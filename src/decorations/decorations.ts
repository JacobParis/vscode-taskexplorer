import { Disposable, workspace } from "vscode";
import { configuration } from "../common/configuration";
import DecorationProvider from "./decorationProvider";
import IgnoreDecorationProvider from "./ignoreDecorationProvider";

export default class Decorations
{
    private enabled: boolean = false;
    private configListener: Disposable;
    private modelListener: Disposable[] = [];

    constructor()
    {
        this.configListener = workspace.onDidChangeConfiguration(() =>
            this.update()
        );
        this.update();
    }

    private update(): void
    {
        const enabled = configuration.get<boolean>("decorations.enabled");

        if (this.enabled === enabled)
        {
            return;
        }

        if (enabled)
        {
            this.enable();
        } else
        {
            this.disable();
        }
        this.enabled = enabled;
    }

    private enable(): void
    {
        //this.modelListener = [];
        //this.model.onDidOpenRepository(
        //    this.onDidOpenRepository,
        //    this,
        //    this.modelListener
        //);
        //this.model.onDidCloseRepository(
        //    this.onDidCloseRepository,
        //    this,
        //    this.modelListener
        //);
        //this.model.repositories.forEach(this.onDidOpenRepository, this);
    }

    private disable(): void
    {
        //this.modelListener.forEach(d => d.dispose());
        //this.providers.forEach(value => value.dispose());
        //this.providers.clear();
    }

    //private onDidOpenRepository(repository: Repository): void
    //{
        //const provider = new DecorationProvider(repository);
        //const ignoreProvider = new IgnoreDecorationProvider(repository);
        //this.providers.set(repository, Disposable.from(provider, ignoreProvider));
    //}

    //private onDidCloseRepository(repository: Repository): void
    //{
        //const provider = this.providers.get(repository);
        //if (provider)
        //{
        //    provider.dispose();
        //    this.providers.delete(repository);
        //}
    //}

    public dispose(): void
    {
        this.configListener.dispose();
        this.disable();
    }
}
