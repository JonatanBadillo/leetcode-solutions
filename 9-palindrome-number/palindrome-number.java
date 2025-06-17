class Solution {

    private static boolean checkPalindrome(String num) {
        int pointerLeft = 0;
        int pointerRight = num.length() - 1;

        while (pointerLeft < pointerRight) {
            if (num.charAt(pointerLeft) != num.charAt(pointerRight)) {
                return false;
            }
            pointerLeft++;
            pointerRight--;
        }
        return true;

    }

    public boolean isPalindrome(int x) {
        if (x < 0) {
            return false;
        }
        String num = x + "";
        return checkPalindrome(num);
    }
}