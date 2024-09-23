import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const notifications = [
  {
    id: '1',
    icon: 'checkmark-circle',
    title: 'Bước 1 Xác định nhu cầu khách hàng',
    description: 'Bảo Ngọc sắp đến hạn lúc 01/08/2024 9:00',
    time: '20/08/2024, 10:00',
    read: false, 
  },
  {
    id: '2',
    icon: 'people',
    title: 'Bạn có khách hàng mới!',
    description: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',
    time: '20/08/2024, 10:00',
    read: true, 
  },
  {
    id: '3',
    icon: 'people',
    title: 'Khách hàng được chia sẻ bị trùng',
    description: 'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng.',
    time: '20/08/2024, 10:00',
    read: true, 
  },
  {
    id: '4',
    icon: 'people',
    title: 'Khách hàng được thêm bị trùng',
    description: 'Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống. Vui lòng thêm khách hàng.',
    time: '20/08/2024, 10:00',
    read: false, 
  },
  {
    id: '5',
    icon: 'checkmark-circle',
    title: 'Công việc sắp đến hạn trong hôm nay',
    description: 'Bạn có 17 công việc sắp đến hạn trong hôm nay.',
    time: '20/08/2024, 10:00',
    read: true,
  },
  {
    id: '6',
    icon: 'checkmark-circle',
    title: 'Công việc đã quá hạn',
    description: 'Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc.',
    time: '20/08/2024, 10:00',
    read: false,
  },
];

const NotificationItem = ({ icon, title, description, time, read }) => (
  <View
    style={[
      styles.notificationContainer,
      !read && styles.unreadNotification, 
    ]}
  >
    <Ionicons name={icon} size={40} color="#007AFF" style={styles.icon} />
    <View style={styles.textContainer}>
      <Text style={[styles.title, !read && styles.unreadText]}>{title}</Text>
      <Text style={[styles.description, !read && styles.unreadText]}>{description}</Text>
      <Text style={[styles.time, !read && styles.unreadText]}>{time}</Text>
    </View>
  </View>
);

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Thông báo</Text>
      <FlatList
        data={notifications}
        renderItem={({ item }) => (
          <NotificationItem
            icon={item.icon}
            title={item.title}
            description={item.description}
            time={item.time}
            read={item.read}
          />
        )}
        keyExtractor={item => item.id}
      />
      <View style={styles.bottomNav}>
        <View style={styles.iconWrapper}>
          <Ionicons name="home" size={30} color="#C4C4C4" />
          <View style={styles.redDot} />
        </View>
        <Ionicons name="search" size={30} color="#C4C4C4" />
        <Ionicons name="add-circle" size={50} color="#007AFF" />
        <View style={styles.iconWrapper}>
          <Ionicons name="notifications" size={30} color="#007AFF" />
          <View style={styles.redDot} />
        </View>
        <Ionicons name="person" size={30} color="#C4C4C4" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  notificationContainer: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#FFFFFF', 
  },
  unreadNotification: {
    backgroundColor: '#E0F7FA', 
  },
  icon: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333', 
  },
  description: {
    fontSize: 14,
    color: '#666', 
    marginVertical: 5,
  },
  time: {
    fontSize: 12,
    color: '#999', 
  },
  unreadText: {
    color: '#333', 
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
  },
  iconWrapper: {
    position: 'relative',
  },
  redDot: {
    position: 'absolute',
    right: -5,
    top: -5,
    backgroundColor: '#FF3B30',
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});
