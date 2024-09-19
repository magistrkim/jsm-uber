import { useUser } from "@clerk/clerk-expo";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images, recentRides } from "@/constants";
import RideCard from "@/components/RideCard";

const Home = () => {
  const { user } = useUser();
  const loading = true;

  return (
    <SafeAreaView className="bg-general-500">
      <FlatList
        data={recentRides?.slice(0, 5)}
        renderItem={({ item }) => <RideCard ride={item} />}
        className="px-5"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        ListEmptyComponent={() => (
          <View className="flex flex-col justify-center items-center">
            {!loading ? (
              <>
                <Image
                  source={images.noResult}
                  className="w-40 h-40"
                  alt="No recent rides"
                  resizeMode="contain"
                />
                <Text className="text-md font-JakartaMedium text-gray-600">
                  No recent rides found
                </Text>
              </>
            ) : (
              <ActivityIndicator
                className="mt-10"
                size="large"
                color="#0286FF"
              />
            )}
          </View>
        )}
        ListHeaderComponent={() => (
          <View className="flex flex-row items-center justify-between my-5">
            <Text className="text-xl font-JakartaExtraBold text-primary-500">
              Welcome, {user?.firstName || user?.emailAddresses[0].emailAddress}{" "}
              👋
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
