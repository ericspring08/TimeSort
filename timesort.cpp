#include <chrono>
#include <iostream>
#include <thread>
#include <vector>

int main()
{
		std::vector<int> v = {3, 1, 4, 1, 5, 9};
 
		std::vector<std::thread> threads;

		for (int i=0; i<v.size(); ++i) {
				threads.push_back(std::thread([i, &v] {
						std::this_thread::sleep_for(std::chrono::seconds(v[i]));
						std::cout << v[i] << '\n';
				}));
		}

		for (auto& t : threads) {
				t.join();
		}
}
