# class Solution:
#     def isAnagram(self, s: str, t: str) -> bool:
#         s = sorted(s)
#         s = "".join(s)
#         t = sorted(t)
#         t = "".join(t)
        
#         return s == t
    

def isAnagram(s, t):
    s = sorted(s)
    s = "".join(s)
    t = sorted(t)
    t = "".join(t)

    if (s == t):
        print(f"{s} is an anagram")
    else:
        print("not an anagram")


isAnagram("robed", "bored")


class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        # Step 1: Quick length check
        if len(s) != len(t):
            return False
        
        # Step 2: Sort both strings using our own MergeSort
        def merge_sort(arr):
            if len(arr) <= 1:
                return arr

            mid = len(arr) // 2
            left = merge_sort(arr[:mid])
            right = merge_sort(arr[mid:])

            return merge(left, right)

        def merge(left, right):
            result = []
            i = j = 0
            while i < len(left) and j < len(right):
                if left[i] < right[j]:
                    result.append(left[i])
                    i += 1
                else:
                    result.append(right[j])
                    j += 1
            result.extend(left[i:])
            result.extend(right[j:])
            return result

        # Apply custom sort
        s_sorted = "".join(merge_sort(list(s)))
        t_sorted = "".join(merge_sort(list(t)))

        # Step 3: Compare results
        return s_sorted == t_sorted
