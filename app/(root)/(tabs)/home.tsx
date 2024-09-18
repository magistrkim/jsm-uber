import { SignedIn, useUser } from "@clerk/clerk-expo";
import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { recentRides } from "@/constants";
import RideCard from "@/components/RideCard";

const Home = () => {
  const { user } = useUser();

  return (
    <SafeAreaView className="bg-general-500">
      <SignedIn>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
      </SignedIn>
      <FlatList
        data={recentRides?.slice(0, 5)}
        renderItem={({ item }) => <RideCard ride={item} />}
      />
    </SafeAreaView>
  );
};

export default Home;
