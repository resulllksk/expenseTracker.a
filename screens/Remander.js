import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'; // Import the new DateTimePicker

const Reminder = () => {
  const [newReminder, setNewReminder] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [reminders, setReminders] = useState([]);
  const [showDatePicker, setShowDatePicker] = useState(false); // To show or hide the DateTimePicker

  // Hatırlatıcı ekleme fonksiyonu
  const addReminder = () => {
    if (newReminder.trim() !== '') {
      const newEntry = {
        id: Date.now().toString(),
        title: newReminder,
        completed: false,
        time: selectedDate,
      };
      setReminders([...reminders, newEntry]); // Yeni hatırlatıcıyı ekle
      setNewReminder(''); // Girdi kutusunu temizle
    }
  };

  // Tarih seçici değiştiğinde
  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || selectedDate;
    setShowDatePicker(false);
    setSelectedDate(currentDate);
  };

  // Hatırlatıcıları listele
  const renderReminder = ({ item }) => (
    <View style={styles.reminderItem}>
      <Text style={styles.reminderText}>{item.title}</Text>
      <Text style={styles.reminderTime}>{item.time.toString()}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hatırlatıcı</Text>

      {/* Yeni hatırlatıcı ekleme kısmı */}
      <TextInput
        style={styles.input}
        placeholder="Hatırlatma gir..."
        value={newReminder}
        onChangeText={setNewReminder}
      />
      
      {/* Tarih seçici butonuna tıklayınca DateTimePicker açılır */}
      <TouchableOpacity
        style={styles.dateButton}
        onPress={() => setShowDatePicker(true)} // Tarih seçici açılacak
      >
        <Text style={styles.dateButtonText}>Tarih Seç</Text>
      </TouchableOpacity>

      {/* DateTimePicker gösterme */}
      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="datetime"
          display="default"
          onChange={onDateChange}
        />
      )}
      
      {/* Hatırlatıcı ekleme butonu */}
      <TouchableOpacity style={styles.addButton} onPress={addReminder}>
        <Text style={styles.addButtonText}>Ekle</Text>
      </TouchableOpacity>

      {/* Hatırlatıcıları listele */}
      <FlatList
        data={reminders}
        renderItem={renderReminder}
        keyExtractor={(item) => item.id}
        style={styles.reminderList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 25,
    fontSize: 16,
    marginBottom: 10,
    width: '100%',
  },
  addButton: {
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  reminderList: {
    marginTop: 30,
    width: '100%',
  },
  reminderItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  reminderText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  reminderTime: {
    fontSize: 14,
    color: '#666',
  },
  dateButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  dateButtonText: {
    color: '#333',
    fontSize: 16,
  },
});

export default Reminder;