import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const MainScreen = () => {
  const products = [
   
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Image
          source={
            typeof item.image === "string" ? { uri: item.image } : item.image
          }
          style={styles.productImage}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.productName}>{item.productName}</Text>
          <Text style={styles.productPrice}>{item.price}</Text>
          <Text style={styles.discount}>{item.discount}</Text>
          <View style={styles.ratingContainer}>
            {Array.from({ length: 5 }).map((_, index) => (
              <Icon
                key={index}
                name={index < Math.floor(item.rating) ? "star" : "star-border"}
                size={16}
                color="gold"
              />
            ))}
            <Text style={styles.reviewCount}>({item.reviewCount})</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log("Quay lại")}>
          <Icon name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchBar}
          placeholder="Dây cáp USB"
          onChangeText={(text) => console.log(text)}
        />
        <TouchableOpacity onPress={() => console.log("Giỏ hàng")}>
          <Icon name="shopping-cart" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Menu")}>
          <Icon name="more-vert" size={30} color="black" />
        </TouchableOpacity>
      </View>

      {/* Danh sách sản phẩm dạng lưới */}
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />

      {/* Menu dưới cùng */}
      <View style={styles.bottomMenu}>
        <TouchableOpacity onPress={() => console.log("Menu")}>
          <Icon name="menu" size={28} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Trang chủ")}>
          <Icon name="home" size={28} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Quay lại")}>
          <Icon name="arrow-back" size={28} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#40acff",
    height: 100,
    paddingTop: 50,
  },
  searchBar: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  row: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  itemContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 5,
    elevation: 3,
  },
  productImage: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
  },
  infoContainer: {
    marginTop: 5,
  },
  productName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
  },
  discount: {
    fontSize: 12,
    color: "gray",
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  reviewCount: {
    fontSize: 12,
    marginLeft: 5,
    color: "gray",
  },
  bottomMenu: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#40acff",
    elevation: 5,
  },
});

export default MainScreen;
