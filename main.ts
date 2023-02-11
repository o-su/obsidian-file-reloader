import { Plugin } from "obsidian";

export default class MyPlugin extends Plugin {
  async onload() {
    this.registerEvent(
      this.app.vault.on("modify", () => {
        const recentLeaf = this.app.workspace.getMostRecentLeaf();

        if (recentLeaf) {
          this.app.workspace.revealLeaf(recentLeaf);
        }
      })
    );
  }
}
