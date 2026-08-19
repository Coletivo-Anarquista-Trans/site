{
	description = "Site do Coletivo Anarquista Trans https://coletivo-anarquista-trans.github.io/site/";

	inputs = {
		nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
	};

	outputs = { self, ... } @inputs: let
		pkgs = inputs.nixpkgs.legacyPackages.x86_64-linux;
	in {
		devShell.x86_64-linux = import ./shell.nix { inherit pkgs; };
	};
}