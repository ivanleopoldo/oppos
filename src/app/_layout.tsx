import "@/global.css";

import { NAV_THEME } from "@/lib/theme";
import { ThemeProvider } from "@react-navigation/native";
import { PortalHost } from "@rn-primitives/portal";
import { Stack } from "expo-router";
import { useColorScheme } from "nativewind";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
	const { colorScheme } = useColorScheme();

	return (
		<ThemeProvider value={NAV_THEME[colorScheme === "dark" ? "dark" : "light"]}>
			<SafeAreaProvider>
				<RootLayoutNav />
			</SafeAreaProvider>
		</ThemeProvider>
	);
}

const RootLayoutNav = () => {
	return (
		<>
			<Stack />
			<PortalHost />
		</>
	);
};
