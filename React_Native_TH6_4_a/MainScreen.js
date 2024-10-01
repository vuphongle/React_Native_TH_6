import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const MainScreen = () => {
  const products = [
    {
      id: "1",
      productName: "Ca nấu lẩu, nấu mì mini",
      price: "250,000 VND",
      discount: "Giảm 20%",
      rating: 4.5,
      reviewCount: 120,
      image: "https://via.placeholder.com/100.png?text=Ca+nau+lau",
    },
    {
      id: "2",
      productName: "1KG KHÔ GÀ BƠ TỎI",
      price: "180,000 VND",
      discount: "Giảm 10%",
      rating: 4,
      reviewCount: 95,
      image: "https://via.placeholder.com/100.png?text=Kho+Ga+Bo+Toi",
    },
    {
      id: "3",
      productName: "Xe cần cẩu đa năng",
      price: "400,000 VND",
      discount: "Giảm 15%",
      rating: 5,
      reviewCount: 45,
      image: "https://via.placeholder.com/100.png?text=Can+Xuc",
    },
    {
      id: "4",
      productName: "Đồ chơi dạng mô hình",
      price: "150,000 VND",
      discount: "Giảm 5%",
      rating: 3.5,
      reviewCount: 30,
      image: "https://via.placeholder.com/100.png?text=Do+choi+mo+hinh",
    },
    {
      id: "5",
      productName: "Lãnh đạo giản đơn",
      price: "95,000 VND",
      discount: "Giảm 10%",
      rating: 4.5,
      reviewCount: 80,
      image: "https://via.placeholder.com/100.png?text=Lanh+Dao+Gian+Don",
    },
    {
      id: "6",
      productName: "Hiểu lòng con trẻ",
      price: "120,000 VND",
      discount: "Giảm 25%",
      rating: 4.8,
      reviewCount: 60,
      image: "https://via.placeholder.com/100.png?text=Hieu+Long+Con+Tre",
    },
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
        <Text style={styles.headerText}>Chat</Text>
        <TouchableOpacity onPress={() => console.log("Giỏ hàng")}>
          <Icon name="shopping-cart" size={30} color="black" />
        </TouchableOpacity>
      </View>

      {/* Danh sách sản phẩm dạng một cột */}
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        // Không cần numColumns, mặc định là 1
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.verticalList}
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
    height: 80,
    paddingTop: 30,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  verticalList: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  itemContainer: {
    flexDirection: "row", // Đặt thành hàng để hiển thị hình ảnh và thông tin cạnh nhau
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10, // Thêm khoảng cách dưới mỗi mục
    elevation: 3,
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "space-between",
  },
  productName: {
    fontSize: 16,
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
