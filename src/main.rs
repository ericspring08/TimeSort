use std::time::Duration;

fn main() {
    let data = [5, 2, 2, 5, 1, 8, 3];

    let mut handles = Vec::new();

    for &item in data.iter() {
        handles.push(std::thread::spawn(move || {
            std::thread::sleep(Duration::from_secs(item));
            println!("{item}");
        }));
    }

    for handle in handles {
        handle.join().unwrap();
    }
}
