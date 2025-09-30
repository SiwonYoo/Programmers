import java.util.*;

class Solution {
    public String solution(String s, String skip, int index) {
        String s1 = "";
        char[] arr = s.toCharArray();
        char[] arr2 = skip.toCharArray();

        for (int i = 0; i < arr.length; i++) {
            int count = 0;
            while (count < index) {
                arr[i]++;
                if (arr[i] > 'z') {
                    arr[i] = 'a';
                }

                boolean isSkip = false;
                for (int j = 0; j < arr2.length; j++) {
                    if (arr[i] == arr2[j]) {
                        isSkip = true;
                        break;
                    }
                }

                if (!isSkip) {
                    count++;
                }
            }
        }
        for (char c : arr) {
            s1 += c;
        }
        return s1;
    }
}
